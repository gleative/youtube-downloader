import React from 'react';
import styled from 'styled-components';

interface Props {
  createFile: () => void;
  setNewVideoInfo: (val: string) => void;
}

const CreateFile: React.FC<Props> = ({ createFile, setNewVideoInfo }) => {
  const submitToForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ? Prevent this shit first... then we run func from parent

    createFile();
  };
  return (
    <Form onSubmit={submitToForm}>
      <input type="text" required placeholder="File title" onChange={(e) => setNewVideoInfo(e.target.value)} />
      <button onClick={createFile}>RENAME FILE</button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export default CreateFile;
