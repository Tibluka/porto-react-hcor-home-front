import styled from 'styled-components';

import theme from '@/styles/theme';

export const TabsContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	max-width: ${theme.grid.colWidth};
	margin: ${theme.spacings.large} auto 0 auto;
	border-bottom: 1px solid ${theme.colors.black15};
`;

export const ContentContainer = styled.div`
	padding-top: ${theme.spacings.large};
`;
export const TabContent = styled.div`
	margin: 0 auto;
	max-width: ${theme.grid.colWidth};
	padding-bottom: ${theme.spacings.xxhuge};
`;
