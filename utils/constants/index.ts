import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import defaultAvatar from '@/assets/img/default-avatar2.jpg';

export function useLanguages () {
  const switchLocalePath = useSwitchLocalePath();
  const { t } = useI18n();

  return computed(() => [
    [{
      label: t('modals.languages.english'),
      shortcuts: ['en-US'],
      to: switchLocalePath('en')
    }],
    [{
      label: t('modals.languages.spanish'),
      shortcuts: ['es-ES'],
      to: switchLocalePath('es')
    }],
    [{
      label: t('modals.languages.french'),
      shortcuts: ['fr-FR'],
      to: switchLocalePath('fr')
    }],
    [{
      label: t('modals.languages.german'),
      shortcuts: ['de-DE'],
      to: switchLocalePath('de')
    }],
    [{
      label: t('modals.languages.italian'),
      shortcuts: ['it-IT'],
      to: switchLocalePath('it')
    }],
    [{
      label: t('modals.languages.chinese'),
      shortcuts: ['zh-CN'],
      to: switchLocalePath('zh')
    }],
    [{
      label: t('modals.languages.japanese'),
      shortcuts: ['ja-JP'],
      to: switchLocalePath('ja')
    }],
    [{
      label: t('modals.languages.arabic'),
      shortcuts: ['ar-SA'],
      to: switchLocalePath('ar')
    }]
  ]);
}

export function useMenuItems () {
  const { t } = useI18n();

  return computed(() => [
    [{
      label: t('modals.avatarSettings.profileLink'),
      avatar: {
        src: defaultAvatar
      }
    }], [{
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      shortcuts: ['E']
    }, {
      label: 'Duplicate',
      icon: 'i-heroicons-document-duplicate-20-solid',
      shortcuts: ['D'],
      disabled: true
    }], [{
      label: 'Archive',
      icon: 'i-heroicons-archive-box-20-solid'
    }, {
      label: 'Move',
      icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid',
      shortcuts: ['⌘', 'D']
    }]
  ]);
}
