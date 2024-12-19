"use server";

export const sendEmail = async (formData: FormData) => {
  console.log(formData instanceof FormData);
  console.log("running on server");
  console.log(formData.get("senderOfEmail"));
  console.log(formData.get("message"));
};
