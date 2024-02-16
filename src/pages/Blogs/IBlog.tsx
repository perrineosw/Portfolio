export default interface Blog {
  color: string;
  date: string;
  image: string;
  title: string;
  description: {
      title: string[];
      content: string[];
  };
  website: {
      title: string[];
      content: string[];
  };
}