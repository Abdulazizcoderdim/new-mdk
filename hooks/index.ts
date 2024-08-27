export const useModalSrc = (photoSrc: string | null): string | null => {
    if (photoSrc === 'https://i.imgur.com/QLZg2jQ.png') {
      return 'rasm1';
    } else if (photoSrc === 'https://i.imgur.com/DWjS4sX.png') {
      return 'rasm2';
    } else if (photoSrc === 'https://i.imgur.com/l7srx32.png') {
      return 'rasm3';
    } else if (photoSrc === 'https://i.imgur.com/nciwtTy.png') {
      return 'rasm4';
    } else {
      return null;
    }
  };