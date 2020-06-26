import { ListAlt, AccountBox, PostAdd } from "@material-ui/icons";

export const menuLinks = [
  {
    exact: true,
    to: '/cabinet',
    icon: AccountBox,
    text: 'profile'
  },
  {
    to: '/cabinet/my-publications',
    icon: ListAlt,
    text: 'my publications'
  },
  {
    to: '/cabinet/publication-adding',
    icon: PostAdd,
    text: 'create a publication'
  }
];