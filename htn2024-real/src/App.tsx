// import { Chat } from "@/Chat/Chat";
// import { ChatIntro } from "@/Chat/ChatIntro";
// import { randomName } from "@/Chat/randomName";
// import { Layout } from "@/Layout";
// import { UserMenu } from "@/components/UserMenu";
//import { useState } from "react";

// export default function App() {
//   const [viewer] = useState(randomName());
//   return (
//     <Layout menu={<UserMenu>{viewer}</UserMenu>}>
//       <ChatIntro />
//       <Chat viewer={viewer} />
//     </Layout>
//   );
// }

// import { FormEvent, useRef, useState } from "react";
// import { useMutation } from "convex/react";
// import { api } from "../convex/_generated/api";
// import SendImage from "./components/SendImage";

export default function App() {
  // const generateUploadUrl = useMutation(api.camera_data.generateUploadUrl);
  // const sendImage = useMutation(api.camera_data.sendImage);

  // const imageInput = useRef<HTMLInputElement>(null);
  // const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // // const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));
  // async function handleSendImage(event: FormEvent) {
  //   event.preventDefault();

  //   // Step 1: Get a short-lived upload URL
  //   const postUrl = await generateUploadUrl();

  //   console.log(postUrl);

  //   // Step 2: POST the file to the URL
  //   const result = await fetch(postUrl, {
  //     method: "POST",
  //     headers: { "Content-Type": selectedImage!.type },
  //     body: selectedImage,
  //   });

  //   console.log(result);

  //   const { storageId } = await result.json();
  //   const name = "default_crosswalk"
  //   // Step 3: Save the newly allocated storage id to the database
  //   await sendImage({storageId, crosswalk_name: name});

  //   setSelectedImage(null);
  //   imageInput.current!.value = "";
  // }
  return (
    <></>
    // <SendImage />
    // <form onSubmit={handleSendImage}>
    //   <input
    //     type="file"
    //     accept="image/*"
    //     ref={imageInput}
    //     onChange={(event) => setSelectedImage(event.target.files![0])}
    //     disabled={selectedImage !== null}
    //   />
    //   <input
    //     type="submit"
    //     value="Send Image"
    //     disabled={selectedImage === null}
    //   />
    // </form>
  );
}
