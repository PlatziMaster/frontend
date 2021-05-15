import React from 'react'
import styled from 'styled-components'

const ItemSkill = () => {
    return (
        <Container>
            <div className="item-skill">
                <div className="item-skill_info">
                    <div className="item-skill__technology">
                        <i class="fab fa-html5"></i>
                        <p>HTML</p>
                    </div>
                    <span>90%</span>
                </div>
                <div>
                <progress value="40" max="100"></progress>
                </div>
            </div>
        </Container>
    )
}

export default ItemSkill

const Container = styled.div`
      width: 60%;

       span {
        padding-right: 3%;
       }
      .item-skill{
          display: flex;
          flex-direction: column;
      }
      .item-skill_info {
          display: flex;
          justify-content: space-between;
          align-items: center;
      }
      .item-skill__technology {
          display: flex;
          width: 30%;
          align-items: center;
          justify-content: space-around;
      }
      progress {
          width: 100%;
      }

`