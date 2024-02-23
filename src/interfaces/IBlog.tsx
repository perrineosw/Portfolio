export default interface Blog {
  color: string;
  colorDark: string;
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
  images?: {
    name: string;
    alt: string;
  }[];
  files?: {
    src: string;
    name: string;
    titleButton: string;
  }[];
}
