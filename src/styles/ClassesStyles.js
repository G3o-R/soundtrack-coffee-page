import styled from "styled-components";

export const StyledClassesPage = styled.div`
    width: 100%;
`;

export const LessonOptionsWrapper = styled.div`
width: 100%;
padding-top: 5.125rem;
display: flex;
justify-content: center;
align-items: center;

`;

export const LessonOptionsContainer = styled.div`
max-width: 78.75rem;
min-height: 48.375rem;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0 1.5rem;
gap: 2.5rem;

@media screen and (min-width: 768px){
    min-height: 59.375rem;
}

@media screen and (min-width: 960px){
    padding: 0 2.5rem;
    gap: 5rem;
    height: 100%;

}
`;

export const LessonWrapper = styled.div`
max-width: 35.75rem;
&.brewing{
    margin-bottom: auto;
}
&.latte-art{
    margin-top: auto;
}
`;

export const LessonContainer = styled.div`
text-align: left;
h1, p{
    margin: 0;
}

.classes-png{
    margin-top: 1.75rem;
}
`;

export const BookingBtnWrapper = styled.div``;

export const BookingBtn = styled.button`
  box-sizing: border-box;
  max-width: 20rem;
  padding: 0rem 1.75rem;
  background: #F8D6A5;
  border: 3px solid #d98000;
  border-radius: 9999px;
  cursor: pointer;
`;