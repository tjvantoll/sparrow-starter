import Link from "next/link";
import { Card } from "antd";
import Gateway from "../../models/Gateway";
import { getFormattedLastSeen } from "../helpers/helperFunctions";
import { GATEWAY_MESSAGE } from "../../constants/ui";
import styles from "../../styles/Card.module.scss";

const GatewayCard = (props: { gateway: Gateway; index: number }) => {
  // in the future perhaps try to make dynamic items based on model props
  const { gateway, index } = props;
  const { uid, serialNumber, lastActivity, location, voltage } = gateway;
  return (
    <Card
      className={styles.cardStyle}
      title={serialNumber}
      extra={
        <Link href={`/${uid}/details`}>
          <a data-testid={`gateway[${index}]-details`}>&#5171;</a>
        </Link>
      }
    >
      <ul className={styles.cardContents}>
        <li>Location:&nbsp;{location || GATEWAY_MESSAGE.NO_LOCATION}</li>
        <li>Last seen:&nbsp;{getFormattedLastSeen(lastActivity)}</li>
        <li>Voltage:&nbsp;{voltage}V</li>
      </ul>
    </Card>
  );
};

export default GatewayCard;
