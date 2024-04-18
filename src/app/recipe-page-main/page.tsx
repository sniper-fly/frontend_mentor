import { Young_Serif } from "next/font/google";
import Image from "next/image";

const figtree = Young_Serif({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Page() {
  const basePath = "/recipe-page-main";

  return (
    <main className="bg-white">
      <div>
        <Image
          src={`${basePath}/image-omelette.jpeg`}
          alt="Omelette"
          width={800}
          height={533}
        />
      </div>
      <section>
        <h1>Simple Omelette Recipe</h1>

        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div>
          Preparation time
          <ul>
            Total: Approximately 10 minutes Preparation: 5 minutes Cooking: 5
            minutes
          </ul>
        </div>
      </section>

      <section>
        <h1>Ingredients</h1>

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
        <h1>Instructions</h1>

        <ol>
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
        <h1>Nutrition</h1>

        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>

        <ul>
          <li>Calories 277kcal</li>

          <li>Carbs 0g</li>

          <li>Protein 20g</li>

          <li>Fat 22g</li>
        </ul>
      </section>
    </main>
  );
}
