"use client";

import { useEffect } from "react";

function Video() {
  useEffect(() => {
    // Chargement du script Google
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="flex flex-col p-6 pt-16 xl:px-20 2xl:px-52">
      <h4 className="text-xl font-emOne uppercase text-nowrap after:content-[''] after:mt-2 after:block after:w-10 after:h-[0.35rem] after:bg-primary lg:text-2xl lg:px-[8.5rem]">
        Ils nous ont fait confiance !
      </h4>
      <div
        className="elfsight-app-0224fa09-b6f7-4029-99e3-083308edb8e8 pl-24 xl:px-0"
        data-elfsight-app-lazy="false"
      />
    </section>
  );
}

// const [reviews, setReviews] = useState<Review[]>([]);

// useEffect(() => {
//   const fetchReviews = async () => {
//     try {
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ5eZUQTPRVA0RyQys7-4icEo&fields=reviews&key=VOTRE_CLE_API`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//           },
//         }
//       );
//       const data = await response.json();
//       if (data.result?.reviews) {
//         setReviews(data.result.reviews);
//       }
//     } catch (error) {
//       console.error("Erreur lors de la récupération des avis:", error);
//     }
//   };

//   fetchReviews();
// }, []);

// return (
//   <section className="flex flex-col p-6 pt-16 xl:px-20 2xl:px-52">
//     <h4 className="text-xl font-emOne uppercase text-nowrap after:content-[''] after:mt-2 after:block after:w-10 after:h-[0.35rem] after:bg-primary lg:text-2xl lg:px-[8.5rem]">
//       Ils nous ont fait confiance !
//     </h4>

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//       {reviews.map((review, index) => (
//         <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//           <div className="flex items-center mb-4">
//             <p className="font-bold mr-2">{review.author_name}</p>
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <FaStar
//                   key={i}
//                   className={
//                     i < review.rating ? "text-yellow-400" : "text-gray-300"
//                   }
//                 />
//               ))}
//             </div>
//           </div>
//           <p className="text-gray-600">{review.text}</p>
//           <p className="text-sm text-gray-400 mt-2">
//             {new Date(review.time * 1000).toLocaleDateString()}
//           </p>
//         </div>
//       ))}
//     </div>
//   </section>
// );
// }

export default Video;
