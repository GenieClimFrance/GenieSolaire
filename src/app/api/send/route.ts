import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  console.warn("Clé API SendGrid manquante");
}

// Initialiser SendGrid seulement si la clé est présente
if (apiKey) {
  sgMail.setApiKey(apiKey);
}

interface SendGridErrorResponse {
  message: string;
  code: number;
  response?: {
    body: unknown;
  };
}

export async function POST(request: Request) {
  if (!apiKey) {
    console.error("Clé API SendGrid manquante");
    return NextResponse.json(
      { message: "Configuration du serveur d'emails manquante" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { nom, email, telephone, message, adresse, codePostal } = body;

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!nom || !email || !message || !emailRegex.test(email)) {
      return NextResponse.json(
        {
          message: "Champs obligatoires manquants ou email invalide",
          details: !emailRegex.test(email)
            ? "Format d'email invalide"
            : "Champs manquants",
        },
        { status: 400 }
      );
    }

    const msg = {
      to: process.env.RECIPIENT_EMAIL || "contact@geniesolairefrance.fr",
      from: {
        email:
          process.env.VERIFIED_SENDER_EMAIL || "contact@geniesolairefrance.fr",
        name: "GENIE SOLAIRE FRANCE",
      },
      subject: `Nouveau message de ${nom} depuis le formulaire de contact`,
      text: `
        Nouveau message de: ${nom}
        Email: ${email}
        Téléphone: ${telephone || "Non renseigné"}
        Adresse: ${adresse || "Non renseignée"}
        Code Postal: ${codePostal || "Non renseigné"}
        Message: ${message}
      `,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone || "Non renseigné"}</p>
        <p><strong>Code Postal:</strong> ${codePostal || "Non renseigné"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      console.log("Tentative d'envoi avec configuration:", {
        to: msg.to,
        from: msg.from.email,
        subject: msg.subject,
        apiKeyPresent: !!apiKey,
      });

      await sgMail.send(msg);
      return NextResponse.json({ message: "Email envoyé avec succès" });
    } catch (sendError: unknown) {
      console.error("Erreur SendGrid détaillée:", {
        error: sendError,
        response: (sendError as any).response?.body,
        stack: (sendError as Error).stack,
      });
      if (
        sendError &&
        typeof sendError === "object" &&
        "message" in sendError &&
        "code" in sendError
      ) {
        const typedError = sendError as SendGridErrorResponse;
        return NextResponse.json(
          {
            message: "Erreur lors de l'envoi de l'email",
            details: `SendGrid: ${typedError.message}`,
          },
          { status: typedError.code || 500 }
        );
      }
      return NextResponse.json(
        { message: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Erreur générale:", error);
    return NextResponse.json(
      { message: "Erreur lors du traitement de la requête" },
      { status: 500 }
    );
  }
}
