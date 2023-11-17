import i18next from 'i18next';

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: {
        "GetUnlimitedAccess": "Get Unlimited Access",
        "UnlimitedArtCreation": "Unlimited Art Creation",
        "ExclusiveStyles": "Exclusive Styles",
        "MagicAvatarsWith20%Off": "Magic Avatars With 20% Off",
        "EARLYACCESS": "EARLY ACCESS",
        "Just$39.99peryear": "Just $39.99 per year",
        "perweek": "per week",
        "WEEKLYACCESS": "WEEKLY ACCESS",
        "perweek": "per week",
        "Continue": "Continue",
        "TermsofUse": "Terms of Use",
        "PrivacyPolicy": "Privacy Policy",
        "Restore": "Restore",
      }
    },
    ru: {
      translation: {
        "GetUnlimitedAccess": "Получите неограниченный доступ",
        "UnlimitedArtCreation": "Безграничное творчество",
        "ExclusiveStyles": "Эксклюзивные стили",
        "MagicAvatarsWith20%Off": "Волшебные аватары со скидкой 20%",
        "EARLYACCESS": "ГОДОВОЙ ДОСТУП",
        "Just$39.99peryear": "Всего $39,99 в год",
        "perweek": "в неделю",
        "WEEKLYACCESS": "НЕДЕЛЬНЫЙ ДОСТУП",
        "perweek": "в неделю",
        "Continue": "Продолжать",
        "TermsofUse": "Условия эксплуатации",
        "PrivacyPolicy": "Политика конфиденциальности",
        "Restore": "Восстановить",
      }
    },
    spa: {
      translation: {
        "GetUnlimitedAccess": "Obtenga acceso ilimitado",
        "UnlimitedArtCreation": "Creación de arte ilimitada",
        "ExclusiveStyles": "Estilos exclusivos",
        "MagicAvatarsWith20%Off": "Avatares Mágicos con 20% de Descuento",
        "EARLYACCESS": "ACCESO TEMPRANO",
        "Just$39.99peryear": "Sólo 39,99 dólares al año",
        "perweek": "por semana",
        "WEEKLYACCESS": "ACCESO SEMANAL",
        "perweek": "por semana",
        "Continue": "Continuar",
        "TermsofUse": "Condiciones de uso",
        "PrivacyPolicy": "Política de privacidad",
        "Restore": "Restaurar",
      }
    }
  }
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
// document.getElementsByClassName('i18n')[0].innerHTML = i18next.t('GetUnlimitedAccess');

// i18n.init({"resStore": resources}, function( t ) {
//   $('.i18n').i18n();
// });

// (".i18n").i18n();

// console.log(i18next.t('GetUnlimitedAccess'))