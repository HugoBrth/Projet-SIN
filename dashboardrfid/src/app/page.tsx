import { Typographie } from "@/ui/design-system/typographie/Typogarphie";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen p-20 bg-primary-400">
        <div className="flex flex-col border border-black w-fit p-5 rounded-xl">
          <Typographie variant="display">Title/Header 1</Typographie>
          <Typographie theme="primary" variant="h2">
            Header 2
          </Typographie>
          <Typographie theme="tercery" variant="h3">
            Header 3
          </Typographie>
          <Typographie theme="secondary" variant="subtitle">
            Subtitle
          </Typographie>
          <Typographie theme="ongoing" variant="body-base">
            Body
          </Typographie>
          <Typographie theme="success" variant="body-bold">
            Body
          </Typographie>
          <Typographie theme="error" variant="body-sm">
            Smaller text here
          </Typographie>
          <Typographie theme="accent1" variant="pretitle">
            Pre title
          </Typographie>
          <Typographie theme="accent2" variant="button-text">
            Button Text
          </Typographie>
          <Typographie theme="grey" variant="link">
            Link Text
          </Typographie>
        </div>
      </div>
    </>
  );
}
