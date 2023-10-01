import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import moment from "moment";
import { Stack } from "react-bootstrap"
import "./styles.css";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  return (
    <ScrollableFeed gap={4}>
      {messages &&
        messages.map((m, i) => (
          <Stack style={{ display: "flex" }} key={m._id} >
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  src={m.sender.pic}
                />
              </Tooltip>
            )}
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#018c31" : "#282828"
                }`,
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? 5 : 10,
                color:"white",
                borderRadius: "20px",
                padding: "10px 15px",
                maxWidth: "75%",
                
              
                
              }}
            >
              {m.content}
            </span>
            <span className="message-footer">{moment(m.createdAt).calendar()}</span>
            
          </Stack>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
