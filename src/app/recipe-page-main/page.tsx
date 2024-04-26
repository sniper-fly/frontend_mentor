import { Young_Serif } from "next/font/google";
import Image from "next/image";

const figtree = Young_Serif({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Page() {
  const basePath = "/recipe-page-main";

  return (
    <main className="mx-auto my-28 w-[45rem] rounded-3xl bg-white p-10 text-gray-600">
      <div>
        <Image
          src={`${basePath}/image-omelette.jpeg`}
          alt="Omelette"
          width={800}
          height={533}
          className="rounded-xl"
        />
      </div>
      <section>
        <h1 className={`${figtree.className} py-5 text-4xl text-black`}>
          Simple Omelette Recipe
        </h1>

        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="my-4 rounded-lg bg-pink-50 p-5">
          <p className="mb-2 text-lg font-semibold text-pink-800">
            Preparation time
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <span className="mr-5 font-bold text-pink-800">・</span>
              <span className="font-bold">Total</span>: Approximately 10 minutes
            </li>
            <li>
              <span className="mr-5 font-bold text-pink-800">・</span>
              <span className="font-bold">Preparation</span>: 5 minutes
            </li>
            <li>
              <span className="mr-5 font-bold text-pink-800">・</span>
              <span className="font-bold">Cooking</span>: 5 minutes
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-gray-200">
        <h1 className={`${figtree.className} py-3 text-3xl text-orange-900`}>
          Ingredients
        </h1>

        <ul className="flex flex-col gap-2">
          <li>
            <span className="ml-1 mr-6 font-bold text-orange-900">・</span>2-3
            large eggs
          </li>
          <li>
            <span className="ml-1 mr-6 font-bold text-orange-900">・</span>Salt,
            to taste
          </li>
          <li>
            <span className="ml-1 mr-6 font-bold text-orange-900">・</span>
            Pepper, to taste
          </li>
          <li>
            <span className="ml-1 mr-6 font-bold text-orange-900">・</span>1
            tablespoon of butter or oil
          </li>
          <li>
            <span className="ml-1 mr-6 font-bold text-orange-900">・</span>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </section>

      <section className="border-b border-gray-200">
        <h1 className={`${figtree.className} py-3 text-3xl text-orange-900`}>
          Instructions
        </h1>

        <ol className="flex flex-col gap-2">
          <li className="flex flex-row">
            <span className="ml-1 mr-6 text-lg font-bold text-orange-900">
              1.
            </span>
            <div>
              <span className="font-bold">Beat the eggs</span>: In a bowl, beat
              the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture.
            </div>
          </li>

          <li className="flex flex-row">
            <span className="ml-1 mr-6 text-lg font-bold text-orange-900">
              2.
            </span>
            <div>
              <span className="font-bold">Heat the pan</span>: Place a non-stick
              frying pan over medium heat and add butter or oil.
            </div>
          </li>

          <li className="flex flex-row">
            <span className="ml-1 mr-6 text-lg font-bold text-orange-900">
              3.
            </span>
            <div>
              <span className="font-bold">Cook the omelette</span>: Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface.
            </div>
          </li>

          <li className="flex flex-row">
            <span className="ml-1 mr-6 text-lg font-bold text-orange-900">
              4.
            </span>
            <div>
              <span className="font-bold">Add fillings (optional)</span>: When
              the eggs begin to set at the edges but are still slightly runny in
              the middle, sprinkle your chosen fillings over one half of the
              omelette.
            </div>
          </li>

          <li className="flex flex-row">
            <span className="ml-1 mr-6 text-lg font-bold text-orange-900">
              5.
            </span>
            <div>
              <span className="font-bold">Fold and serve</span>: As the omelette
              continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a
              plate.
            </div>
          </li>

          <li className="flex flex-row">
            <span className=" ml-1 mr-6 text-lg font-bold text-orange-900">
              6.
            </span>
            <div>
              <span className="font-bold">Enjoy</span>: Serve hot, with
              additional salt and pepper if needed.
            </div>
          </li>
        </ol>
      </section>

      <section>
        <h1 className={`${figtree.className} py-3 text-3xl text-orange-900`}>
          Nutrition
        </h1>

        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>

        <ul>
          <li>
            Calories <span className="font-bold text-orange-900">277kcal</span>
          </li>

          <li>
            Carbs <span className="font-bold text-orange-900">0g</span>
          </li>

          <li>
            Protein <span className="font-bold text-orange-900">20g</span>
          </li>

          <li>
            Fat <span className="font-bold text-orange-900">22g</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
