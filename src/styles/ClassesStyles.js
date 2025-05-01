import styled from "styled-components";
import { motion } from "framer-motion";

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
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1.5rem;
  gap: 2.5rem;

  @media screen and (min-width: 768px) {
    min-height: 59.375rem;
    flex-direction: row;
  }

  @media screen and (min-width: 960px) {
    padding: 0 2.5rem;
    gap: 5rem;
    height: 100%;
  }
`;

export const LessonWrapper = styled.div`
  max-width: 35.75rem;
  &.brewing {
    margin-bottom: auto;
  }
  &.latte-art {
    margin-top: auto;
  }
`;

export const LessonContainer = styled.div`
  text-align: left;
  h1,
  p {
    margin: 0;
  }

  .classes-png {
    margin-top: 1.75rem;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  text-align: left;
`;

export const TextContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  &.mobile {
    overflow: hidden;
    border-bottom: 1px solid rgba(217, 128, 0);

    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &.expanded {
      p {
        -webkit-line-clamp: unset;
      }
    }
  }
`;

export const BookingBtnWrapper = styled.div`
  padding-top: 2.5rem;
  @media screen and (min-width: 480px) {
    padding-top: 5rem;
  }


`;

export const BookingBtn = styled.button`
  font-size: 2rem;
  box-sizing: border-box;
  max-width: 20rem;
  padding: 0rem 1.75rem;
  background: #f8d6a5;
  border: 3px solid #d98000;
  border-radius: 9999px;
  cursor: pointer;
`;
