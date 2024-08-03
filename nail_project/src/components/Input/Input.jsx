import * as SC from './Input.styled'

export const Input = () => {
  return (
    <form>
      <SC.ContainerForInputLabel class="form">
        <SC.FormInput
          type="text"
          id="email"
         
          autocomplete="off"
          placeholder=" "
        />
        <SC.Label for="email" class="form__label">
          Email
        </SC.Label>
      </SC.ContainerForInputLabel>
      <SC.ContainerForInputLabel>
      <SC.FormInput
          type="text"
          id="name"
          autocomplete="off"
          placeholder=" "
        />
        <SC.Label for="name" class="form__label">
          Name
        </SC.Label>
      </SC.ContainerForInputLabel>
    </form>
  );
};
