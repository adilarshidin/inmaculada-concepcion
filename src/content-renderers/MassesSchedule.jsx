import ReactMarkdown from "react-markdown";
import masses from "../../content/schedule/masses.md?raw";

const MassesSchedule = () => {
  return <ReactMarkdown>{masses}</ReactMarkdown>;
};

export default MassesSchedule;
