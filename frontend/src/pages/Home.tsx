import { Column, Text, Row, Input, Button  } from 'components';

export const Home = () => {
  return (
    <Column width="600px" margin="0 auto">
      <Text fontWeight="bold" fontSize="bodyLarge" my="10px" paddingLeft="10px">Tasks</Text>
      <Row width="100%">
        <Input placeholder="Enter a task name here" />
        <Button>OK</Button>
      </Row>
    </Column>
  );
};
