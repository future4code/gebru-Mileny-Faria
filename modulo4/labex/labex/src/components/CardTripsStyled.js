import styled from "styled-components";


export const ContainerCard = styled.div`
    position: relative;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    height: 600px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    margin: 20px;
    box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.15);

`

export const Img = styled.img`
  width: 300px;

`

export const Name = styled.h3`
  color: #fff;
  text-transform: uppercase;
  margin-left: 15px;
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 4px;

`

export const Description = styled.p`
  color: #fff;
  margin-left: 15px;
  margin-top: 0px;
  font-size: 14px;

`

export const TripDate = styled.p`
  color: #fff;
  margin-left: 15px;
  font-size: 10px;

`

export const TripDurationInDays = styled.p`
  color: #fff;
  margin-left: 15px;
  margin-top: -5px;
  font-size: 10px;

`

export const PerPerson = styled.p`
  color: #fff;
  margin-left: 15px;
  margin-top: 20px;
  font-size: 12px;

`

export const Sign = styled.p`
  color: #fff;
  margin-left: 150px;
  margin-top: -5px;
  font-size: 14px;
  font-weight: bold;

`

export const Value = styled.p`
  color: #fff;
  margin-left: 180px;
  margin-top: -35px;
  font-size: 22px;
  font-weight: bold;

`

export const Button = styled.button`
    bottom: 10px;
    position: absolute;
    padding: 10px 20px;
    color: #ff0043;
    font-size: 16px;
    -webkit-text-decoration: none;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    border-radius: 5px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 200px;

    :hover {
      background: #ff0043;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
        0 0 100px #ff0043;
    }

`


    



    