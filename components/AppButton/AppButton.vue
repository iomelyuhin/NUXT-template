<template>
  <div class="button-wrapper">
    <button
      v-if="btnType == 'button'"
      :class="`button ${btnRole} ${btnStyle} ${btnSize}`"
    >
      <div v-if="svgIcon || faIcon" class="button__icon">
        <img
          v-if="svgIcon"
          class="button__icon-pic"
          :src="require(`@/assets/images/icons/${svgIcon}.svg`)"
        />
        <font-awesome-icon
          v-if="faIcon"
          class="button__icon-fa"
          :icon="[faIconType, faIconName]"
        />
      </div>
      <div class="button__text">
        {{ text }}
      </div>
    </button>
    <a
      v-if="btnType == 'link'"
      :href="link"
      :class="`button ${btnRole} ${btnStyle} ${btnSize}`"
    >
      <div v-if="svgIcon || faIcon" class="button__icon">
        <img
          v-if="svgIcon"
          class="button__icon-pic"
          :src="require(`@/assets/images/icons/${svgIcon}.svg`)"
        />
        <font-awesome-icon
          v-if="faIcon"
          class="button__icon-fa"
          :icon="[faIconType, faIconName]"
        />
      </div>
      <div class="button__text">{{ text }}</div>
    </a>
    <div
      class="select-button"
      :class="{ active: isOpenButtonMenu }"
      v-if="btnType == 'select'"
    >
      <button
        @click="toggleButtonMenu"
        :class="`button ${btnRole} ${btnStyle} ${btnSize}`"
      >
        <div v-if="svgIcon || faIcon" class="button__icon">
          <img
            v-if="svgIcon"
            class="button__icon-pic"
            :src="require(`@/assets/images/icons/${svgIcon}.svg`)"
          />
          <font-awesome-icon
            v-if="faIcon"
            class="button__icon-fa"
            :icon="[faIconType, faIconName]"
          />
        </div>
        <div class="button__text">
          {{ text }}
        </div>
        <div class="button__select-icon">
          <font-awesome-icon
            icon="angle-down"
            class="button__select-icon-triangle"
          />
        </div>
      </button>
      <div class="select-button__menu">
        <button
          v-for="(item, index) in menu"
          :key="index"
          class="select-button__menu-item"
          :class="`button ${btnRole} ${btnStyle} ${btnSize}`"
        >
          {{ item.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Action',
      required: false,
    },
    btnRole: {
      type: String,
      default: 'primary',
      required: false,
    },
    btnType: {
      type: String,
      default: 'button',
      required: false,
    },
    btnStyle: {
      type: String,
      default: 'filled',
      required: false,
    },
    btnSize: {
      type: String,
      default: 'normal',
      required: false,
    },
    link: {
      type: String,
      default: '#',
      required: false,
    },
    svgIcon: {
      type: String,
      default: '',
      required: false,
    },
    faIcon: {
      type: [String, Array],
      default: '',
      required: false,
    },
    menu: {
      type: Array,
      default() {
        return [
          {
            icon: 'user',
            text: 'menu item 1',
          },
        ];
      },
    },
  },
  data() {
    return {
      isOpenButtonMenu: false,
    };
  },
  computed: {
    faIconType() {
      return this.faIcon.split(', ')[0];
    },
    faIconName() {
      return this.faIcon.split(', ')[1];
    },
  },
  methods: {
    toggleButtonMenu() {
      this.isOpenButtonMenu = !this.isOpenButtonMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
//colors
$border: none;

$app-btn-primary-text-color: $white;
$app-btn-primary-button-color: #238636;
$app-btn-primary-text-hover-color: #fff;
$app-btn-primary-button-hover-color: #2ea043;

$app-btn-secondary-text-color: #fff;
$app-btn-secondary-button-color: #21262d;
$app-btn-secondary-text-hover-color: #fff;
$app-btn-secondary-button-hover-color: #15181b;

//fonts sizes
$app-btn-large-font-size: 35px;
$app-btn-normal-font-size: 24px;
$app-btn-small-font-size: 18px;

//paddings
$app-btn-large-size-paddings: 20px 30px;
$app-btn-normal-size-paddings: 15px 20px;
$app-btn-small-size-paddings: 8px 13px;

//radius
$app-btn-large-radius: 20px;
$app-btn-normal-radius: 10px;
$app-btn-small-radius: 5px;

//icon margin
$app-btn-large-size-margin-icon: 5px;
$app-btn-normal-size-margin-icon: 10px;
$app-btn-small-size-margin-icon: 20px;

//icon size
$app-btn-large-icon: 35px;
$app-btn-normal-icon: 24px;
$app-btn-small-icon: 18px;

.button {
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: $app-btn-normal-size-paddings;
  border-radius: $app-btn-normal-radius;
  background-color: $app-btn-primary-button-color;
  color: $app-btn-primary-text-color;
  font-size: $app-btn-normal-font-size;
  transition: 0.3s;
  cursor: pointer;
  border: $border;
  text-decoration: none;

  &:hover {
    background-color: $app-btn-primary-button-hover-color;
    color: $app-btn-primary-text-hover-color;
  }

  &.secondary {
    color: $app-btn-secondary-text-color;
    background-color: $app-btn-secondary-button-color;
    &:hover {
      background-color: $app-btn-secondary-button-hover-color;
      color: $app-btn-secondary-text-hover-color;
    }
  }

  &.small {
    padding: $app-btn-small-size-paddings;
    border-radius: $app-btn-small-radius;
    font-size: $app-btn-small-font-size;

    & .button__icon-pic {
      width: $app-btn-small-icon;
      height: $app-btn-small-icon;
    }
  }
  &.normal {
    padding: $app-btn-normal-size-paddings;
    border-radius: $app-btn-normal-radius;
    font-size: $app-btn-normal-font-size;

    & .button__icon-pic {
      width: $app-btn-normal-icon;
      height: $app-btn-normal-icon;
    }
  }
  &.large {
    padding: $app-btn-large-size-paddings;
    border-radius: $app-btn-large-radius;
    font-size: $app-btn-large-font-size;

    & .button__icon-pic {
      width: $app-btn-large-icon;
      height: $app-btn-large-icon;
    }
  }
}

.button__icon-pic {
  width: $app-btn-normal-icon;
  height: $app-btn-normal-icon;
}

.button__icon {
  margin-right: $app-btn-normal-size-margin-icon;
}

.select-button {
  position: relative;
  &.active {
    .button__select-icon {
      transform: rotate(180deg);
    }
    .select-button__menu {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      right: 0;
    }
  }
}

.button__select-icon {
  margin-left: 10px;
  transition: 0.3s;
}

.select-button__menu {
  display: none;
  padding: 3px;
}

.select-button__menu-item {
}
</style>
