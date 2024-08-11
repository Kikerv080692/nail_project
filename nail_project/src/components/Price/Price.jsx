import "./Price.scss";
import * as SC from './Price.styled'


function Price() {
  
  return (
    <SC.Wrapper id="price">
      <h1>Price</h1>
      <table>
        <tbody>
          <tr>
            <td>Маникюр</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Маникюр с покрытием</td>
            <td>450</td>
          </tr>
          <tr>
            <td>Наращивание</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Педикюр</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Педикюр с покрытием</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Снятие гель лака</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Ремонт донаращивание</td>
            <td>300</td>
          </tr>
        </tbody>
      </table>
      <div className="discount">
        <h3>Скидка на первое посещение 15%</h3>
      </div>
    </SC.Wrapper>
  );
}

export default Price;
