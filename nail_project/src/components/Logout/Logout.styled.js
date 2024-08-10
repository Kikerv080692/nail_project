import styled from "styled-components";

export const Button = styled.button`
padding: 8px;
border-radius: 8px;
background: green;
color: #fff;
border: none;
transition: all 0.3s;
&:hover {
    background:  #218838;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}
`