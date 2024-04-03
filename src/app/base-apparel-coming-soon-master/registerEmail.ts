"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export type FormState = {
  errors: {
    email?: string[];
  };
};

export default async function registerEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedData = schema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedData.success) {
    console.log("==================")
    console.log(validatedData);
    console.log("==================")
    console.log(validatedData.error);
    console.log("==================")
    console.log(validatedData.error.flatten());
    console.log("==================")
    console.log(validatedData.error.flatten().fieldErrors);
    console.log("==================")
    return { errors: validatedData.error.flatten().fieldErrors };
  }

  revalidatePath("/base-apparel-coming-soon-master");
  redirect("/base-apparel-coming-soon-master");
}
