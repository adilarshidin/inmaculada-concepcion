import styled from "styled-components";
import yaml from "js-yaml";
import intentionsRaw from "../../content/schedule/intentions.md?raw";

// ---------- Styled components ----------
const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  color: #333;
`;

const Th = styled.th`
  border: 1px solid #d1d5db;
  padding: 0.75rem 1rem;
  background-color: #f5f5f5;
  text-align: left;
  font-weight: 600;
`;

const Td = styled.td`
  border: 1px solid #d1d5db;
  padding: 0.75rem 1rem;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }

  &:hover {
    background-color: #f0f0f0;
    transition: background-color 0.2s ease;
  }
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #bfa34a;
`;

// ---------- Component ----------
const MassIntentions = () => {
  // Extract YAML frontmatter
  const match = intentionsRaw.match(/---\n([\s\S]*?)\n---/);
  const data = match ? yaml.load(match[1]) : { intentions: [] };
  const intentions = data.intentions || [];

  return (
    <TableWrapper>
      <Heading>Intenciones de misas</Heading>
      <Table>
        <thead>
          <Tr>
            <Th>Fecha</Th>
            <Th>Intención</Th>
          </Tr>
        </thead>
        <tbody>
          {intentions.map((item, index) => (
            <Tr key={index}>
              <Td>{item.date}</Td>
              <Td>{item.name}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default MassIntentions;
