import { ProdCardSecondary } from "../ProdCardSecondary/ProdCardSecondary";

interface FillteredListProps {
  response: {
    id: number;
    name: string;
    description: string;
    price: number;
    count: number;
    categoryId: number;
    imageUrl: string[];
  }[] | any[];
}

export const FillteredList = ({ response }: FillteredListProps) => {
  return (
    <ul className="max-w-[960px] grid md:grid-cols-3 gap-[30px]">
      {response.map(item => <ProdCardSecondary prodId={item.id} key={item.name} title={item.name} link={item.imageUrl[0]} price={item.price} />)}
    </ul>
  );
};
