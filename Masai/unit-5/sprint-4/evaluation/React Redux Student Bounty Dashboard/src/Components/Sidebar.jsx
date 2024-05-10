import styled from "styled-components";

export const Sidebar = () => {
  
  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input data-testid="batch-web101" type="checkbox" />
        <label>WEB-101</label>
        <br />
        <br />
        <input data-testid="batch-js201" type="checkbox" />
        <label>JS-201</label>
        <br />
        <br />
        <input data-testid="batch-rct101" type="checkbox" />
        <label>RCT101</label>
        <br />
        <br />
        <input data-testid="batch-rct211" type="checkbox" />
        <label>RCT211</label>
        <br />
        <br />
        <input data-testid="batch-nxm101" type="checkbox" />
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button data-testid="page-prev">Previous</button>
        <button data-testid="page-next">Next</button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
