<script>
export default {
  props: {
    items: Array,
    root: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      activeIndex: null,
    };
  },

  methods: {
    onMenuItemClick(event, item, id) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }

      if (!item.to && !item.url) {
        event.preventDefault();
      }

      //execute command
      if (item.command) {
        item.command({ originalEvent: event, item: item });
      }

      this.activeIndex = id === this.activeIndex ? null : id;

      this.$emit("onClickMenuItemParent", {
        originalEvent: event,
        itemActive: item,
      });
    },

    visible(item) {
      return typeof item.visible === "function"
        ? item.visible()
        : item.visible !== false;
    },
  },
};
</script>

<template>
  <ul v-if="items">
    <template v-for="item of items" :key="item.id">
      <li
        v-if="visible(item) && !item.separator"
        :key="item.label || item.id"
        :class="[
          {
            'layout-menuitem-category': root,
            'active-menuitem':
              activeIndex === item.id && !item.to && !item.disabled,
          },
        ]"
        role="none"
        style="cursor: pointer"
      >
        <template v-if="root">
          <div class="mb-2">
            <div v-if="item.items.length > 0">
              <div
                :class="['layout-menuitem-root-text font-bold', item.class]"
                :aria-label="item.label"
              >
                <i :class="item.icon"></i>
                <span class="ml-4">{{ item.label }}</span>
              </div>
              <div class="ml-3">
                <AccountSubmenu
                  :items="visible(item) && item.items"
                  @onClickMenuItemParent="
                    $emit('onClickMenuItemParent', $event, item)
                  "
                />
              </div>
            </div>

            <div v-else>
              <router-link :to="{ name: item.to }" class="router-link-parent">
                <div
                  :class="['layout-menuitem-root-text font-bold', item.class]"
                  :aria-label="item.label"
                  @click="onMenuItemClick($event, item, item.id)"
                >
                  <i :class="item.icon" />
                  <span class="ml-4">{{ item.label }}</span>
                </div>
              </router-link>
            </div>
          </div>
        </template>

        <template v-else>
          <router-link
            v-if="item.to"
            :to="{ name: item.to }"
            :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
            :style="item.style"
            @click="onMenuItemClick($event, item, item.id)"
            :target="item.target"
            :aria-label="item.label"
            exact
            role="menuitem"
            v-ripple
          >
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
            <i
              v-if="item.items"
              class="pi pi-fw pi-angle-down menuitem-toggle-icon"
            />
            <Badge v-if="item.badge" :value="item.badge"></Badge>
          </router-link>

          <a
            v-if="!item.to"
            :href="item.url || '#'"
            :style="item.style"
            :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
            @click="onMenuItemClick($event, item, item.id)"
            :target="item.target"
            :aria-label="item.label"
            role="menuitem"
            v-ripple
          >
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
            <i
              v-if="item.items"
              class="pi pi-fw pi-angle-down menuitem-toggle-icon"
            ></i>
            <Badge v-if="item.badge" :value="item.badge"></Badge>
          </a>

          <transition name="layout-submenu-wrapper">
            <AccountSubmenu
              v-show="activeIndex === item.id"
              :items="visible(item) && item.items"
              @onClickMenuItemParent="$emit('onClickMenuItemParent', $event)"
            />
          </transition>
        </template>
      </li>

      <li
        class="p-menu-separator"
        :style="item.style"
        v-if="visible(item) && item.separator"
        :key="'separator' + item.id"
        role="separator"
      ></li>
    </template>
  </ul>
</template>

<style lang="scss">
.active-parent-item {
  font-weight: 700 !important;
  color: var(--primary-color) !important;
}

.router-link-parent {
  padding: 0rem !important;
}

.layout-sidebar {
  position: fixed;
  width: 300px;
  height: calc(100vh - 9rem);
  z-index: 999;
  overflow-y: auto;
  user-select: none;
  top: 7rem;
  left: 2rem;
  transition: transform 0.2, left 0.2;
  background-color: var(--surface-overlay);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05),
    0px 1px 4px rgba(0, 0, 0, 0.08);
}

.layout-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    &.layout-menuitem-category {
      margin-top: 0.75rem;

      &:first-child {
        margin-top: 0;
      }
    }

    .layout-menuitem-root-text {
      text-transform: uppercase;
      color: var(--surface-900);
      font-weight: 600;
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
    }

    a {
      cursor: pointer;
      text-decoration: none;
      display: flex;
      align-items: center;
      color: var(--text-color);
      transition: color 0.2;
      border-radius: 12px;
      padding: 0.75rem 1rem;
      transition: background-color 0.15s;

      span {
        margin-left: 0.5rem;
      }

      .menuitem-toggle-icon {
        margin-left: auto;
      }

      &:focus {
        outline: 0 none;
        outline-offset: 0;
        transition: box-shadow 0.2s;
        box-shadow: inset var(--focus-ring);
      }

      &:hover {
        background-color: var(--surface-hover);
      }

      &.router-link-exact-active {
        font-weight: 700;
        color: var(--primary-color);
      }

      .p-badge {
        margin-left: auto;
      }
    }

    &.active-menuitem {
      > a {
        .menuitem-toggle-icon {
          &:before {
            content: "\e933";
          }
        }
      }
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      &.layout-submenu-wrapper-enter-from,
      &.layout-submenu-wrapper-leave-to {
        max-height: 0;
      }

      &.layout-submenu-wrapper-enter-to,
      &.layout-submenu-wrapper-leave-from {
        max-height: 1000px;
      }

      &.layout-submenu-wrapper-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
      }

      &.layout-submenu-wrapper-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
      }

      ul {
        padding-left: 1rem;
      }
    }
  }
}
</style>
