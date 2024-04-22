import { Young_Serif } from "next/font/google";
import Image from "next/image";

const figtree = Young_Serif({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Page() {
  const basePath = "/recipe-page-main";

  return (
    <main className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-gray-600 my-28">
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

        <div className="rounded-lg bg-pink-50 p-5 my-4">
          <p className="text-lg font-semibold text-pink-800 mb-2">
            Preparation time
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <span className="mr-4">・</span>
              <span className="font-bold">Total</span>: Approximately 10 minutes
            </li>
            <li>
              <span className="mr-4">・</span>
              <span className="font-bold">Preparation</span>: 5 minutes
            </li>
            <li>
              <span className="mr-4">・</span>
              <span className="font-bold">Cooking</span>: 5 minutes
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h1 className={`${figtree.className} text-3xl text-orange-900 py-3`}>
          Ingredients
        </h1>

        <ul>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </section>

      <section>
        <h1 className={`${figtree.className} text-3xl text-orange-900 py-3`}>
          Instructions
        </h1>

        <ol className="list-inside list-decimal marker:font-bold marker:text-orange-900">
          <li>
            Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
            pepper until they are well mixed. You can add a tablespoon of water
            or milk for a fluffier texture.
          </li>

          <li>
            Heat the pan: Place a non-stick frying pan over medium heat and add
            butter or oil.
          </li>

          <li>
            Cook the omelette: Once the butter is melted and bubbling, pour in
            the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
          </li>

          <li>
            Add fillings (optional): When the eggs begin to set at the edges but
            are still slightly runny in the middle, sprinkle your chosen
            fillings over one half of the omelette.
          </li>

          <li>
            Fold and serve: As the omelette continues to cook, carefully lift
            one edge and fold it over the fillings. Let it cook for another
            minute, then slide it onto a plate.
          </li>

          <li>Enjoy: Serve hot, with additional salt and pepper if needed.</li>
        </ol>
      </section>

      <section>
        <h1 className={`${figtree.className} text-3xl text-orange-900 py-3`}>
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
