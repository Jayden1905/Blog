import { FeatureProps } from "../../../interfaces";

type Props = {
  feature: FeatureProps;
};

export default function Features({ feature }: Props) {
  return (
    <div>
      <h1>{feature.author.name}</h1>
    </div>
  );
}
