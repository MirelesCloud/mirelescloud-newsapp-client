import styled from '@emotion/styled'


/* Header */
export const Nav = styled('div')`
    background-color: #f7f7f5;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`

export const NavHeader = styled('div')`
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`

export const NavLeft = styled('div')`
    width: 33.333%;
    text-align: left;
    font-size: 2em;
    font-weight: 300;

    @media (max-width: 378px) {
        font-size: 1.5em;
      }
`

export const NavCenter = styled('div')`
    wdith; 33.333%;
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    @media (max-width: 378px) {
        font-size: 1.5em;
      }
`

export const NavRight = styled('div')`
    width: 33.333%;
    text-align: right;
    font-size: 2rem;
    font-weight: 300;
`
/* Body */
export const MainContainer = styled('div')`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`

export const ContentWrapper = styled('div')`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`

/* Card */
export const CardContainer = styled('div')`
    position: relative;
    flex-basis: 100%;
    flex-basis: calc(33.333% - 20px);
    margin: 10px;
    cursor: pointer;
    transition: 0.3s all ease-in;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    @media (max-width: 992px) {
      flex-basis: calc( 50% - 20px);
    }

    @media (max-width: 600px) {
      flex-basis: calc(50% - 20px)
    }

    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.2);
    }
`

export const CardBody = styled('div')`
  padding: 5px 10px;
`

export const CardImage = styled('img')`
    cursor: pointer;
    width: 100%;
`
export const CardHeader = styled('div')`
  font-size: 1rem;
  font-weight: 500;
  padding: 5px;
`;

export const CardText = styled('p')`
  padding: 5px;
  margin: 3px;
  font-size: 0.9rem;
`

export const CardFooter = styled('div')`
  padding: 3px;
  margin: 3px;
  font-size: 0.8rem;
  bottom: 0;
`


export const InfoDetails = styled('div')`
  display: flex;
`

export const InfoDetailsLeft = styled('div')`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
`

export const InfoDetailsRight = styled('div')`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`


/* Modal */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`

export const Dialog = styled.div`
  background: white;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  
`

export const ModalContainer = styled.div`
  position: relative;
  z-index: 0;
  
`

export const ModalWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`
export const ModalContent = styled.div`
  position: relative;
  flex-basis: 100%;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s all ease-in;
`


export const Column = styled.div`
  float: left;
  width: 50%;

  @media(max-width: 378px) {
    width: 100%;
  }
`

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`

export const ModalHeader = styled.h3``

export const ModalSubHeader = styled.h4``

export const ModalText = styled.p`
  padding: 0px;
  margin: 3px;
`
export const CloseModal = styled.p`
  &:after {
    content: 'x';
    position: relative;
    float: right;
    cursor: pointer;
    font-weight: 500;
  }
`

export const Line = styled.hr`
  color: rgba(0, 0, 0, 0.7);
`

/*Footer */
export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%
  background: #212121;
`