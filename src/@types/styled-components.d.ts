import 'styled-components';
import theme from 'styles/theme';

declare module 'styled-components' {
	export type Theme = typeof theme;
}
