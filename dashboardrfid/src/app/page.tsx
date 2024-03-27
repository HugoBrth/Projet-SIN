import { Typographie } from "@/ui/design-system/typographie/Typogarphie";

export default function Home() {
  return (
    <>
      <div className="w-full p-20">
        <div className="flex flex-col border border-black w-fit p-5 rounded-xl">
          <Typographie variant="display">Title/Header 1</Typographie>
          <Typographie variant="h2">Header 2</Typographie>
          <Typographie variant="h3">Header 3</Typographie>
          <Typographie variant="subtitle">Subtitle</Typographie>
          <Typographie variant="body-base">Body</Typographie>
          <Typographie variant="body-bold">Body</Typographie>
          <Typographie variant="body-sm">Smaller text here</Typographie>
          <Typographie variant="pretitle">Pre title</Typographie>
          <Typographie variant="button-text">Button Text</Typographie>
          <Typographie variant="link">Link Text</Typographie>
        </div>
      </div>
    </>
  );
}
