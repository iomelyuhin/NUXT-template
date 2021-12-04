<template>
  <div class="buttons">
    <div class="title-h2">Buttons kit</div>
    <div class="buttons__item">
      <div class="title-h3">Primary button</div>
      <AppButton 
        text='Login'
        btnRole='primary'
        btnType='button'
        btnStyle='filled'
        btnSize='large'
        svgIcon='user'
      />
      <AppButton 
        text='Not now'
        btnRole='secondary'
        btnType='link'
        btnStyle='bordered'
        btnSize='small'
        faIcon='fas, user'
      />
    </div>
  </div>
</template>