import { Button } from "@/ui/design-system/button/Button";
import { Typographie } from "@/ui/design-system/typographie/Typogarphie";
import { FaArrowRight } from "react-icons/fa6";

const page = () => {
  return (
    <div className="w-full min-h-screen py-5 px-5 bg-primary-400">
        <Typographie variant="display" theme="ongoing" className="text-center mb-6">Design System</Typographie>
      <div className="flex items-center justify-between w-full ">
        <div className="flex flex-col border border-black w-fit p-5 rounded-lg">
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
        <div className="space-y-5 flex flex-col border border-black w-fit p-5 rounded-lg">
          <Typographie>Small</Typographie>
          <div className="flex items-center gap-5">
            <Button icon={{ icon: FaArrowRight }} size="small">
              Click here !
            </Button>
            <Button size="small" variant="outline">
              Click here !
            </Button>
            <Button size="small" variant="disable">
              Click here !
            </Button>
            <Button size="small" variant="noborder">
              Click here !
            </Button>
          </div>
          <Typographie>Medium</Typographie>
          <div className="flex items-center gap-5">
            <Button icon={{ icon: FaArrowRight }}>Click here !</Button>
            <Button variant="outline">Click here !</Button>
            <Button variant="disable">Click here !</Button>
            <Button variant="noborder">Click here !</Button>
          </div>
          <Typographie>Large</Typographie>
          <div className="flex items-center gap-5">
            <Button icon={{ icon: FaArrowRight }} size="large">
              Click here !
            </Button>
            <Button size="large" variant="outline">
              Click here !
            </Button>
            <Button size="large" variant="disable">
              Click here !
            </Button>
            <Button size="large" variant="noborder">
              Click here !
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
