import { useState } from 'react';
import { Column, Text, Row, Input, Button, List, Logo } from 'components';

export const Home = () => {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<{ label: string }[]>([]);

  const handleOKButton = () => {
    if (!taskName) return;

    setTasks((previous) => {
      const copy = [...previous];
      copy.push({ label: taskName });
      return copy;
    });
    setTaskName('');
  };

  return (
    <Column width="600px" margin="0 auto">
      <Column width="100%" py="25px" alignItems="center">
        <Logo />
      </Column>

      <Column width="100%" minHeight="300px" p='20px' bg="rgba(255, 255, 255, 0.2)" borderRadius="4px" alignItems='center'>
        <Text fontFamily='secondary' fontSizes='bodyExtraLarge'>Ready</Text>
        
        <Text fontFamily='secondary' fontWeight='bold' fontSizes='displayExtraLarge' py='30px'>25:00</Text>
        
        <Button variant="primary">
          <Text fontFamily="secondary" fontSizes="bodyExtraLarge" fontWeight="bold" color="primary">
            START
          </Text>
        </Button>
      </Column>

      <Text fontWeight="bold" fontSizes="bodyLarge" my="10px" paddingLeft="10px">
        Tasks
      </Text>
      <Row width="100%">
        <Input placeholder="Enter a task name here" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <Button onClick={handleOKButton}>OK</Button>
        <List items={tasks} />
      </Row>
    </Column>
  );
};
