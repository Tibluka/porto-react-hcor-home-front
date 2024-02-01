import React, { useState } from 'react';
import { DropdownProps } from './DropDown.types';
import * as S from './DropDown.styles';
import Image from 'next/image';

export const Dropdown = ({
	selectOptions,
	label,
	hasLabel = true,
	success,
	errorMessage,
	border,
	disable,
	selectedOption,
	onClick,
	testId = label,
	width
}: DropdownProps) => {
	const [dropdownActive, setDropdownActive] = useState(false);

	function selectOption(selectedOption: any) {
		onClick(selectedOption);
		setDropdownActive(false);
	}

	return (
		<S.Container width={width}>
			<S.Select active={dropdownActive} onClick={() => setDropdownActive(!dropdownActive)}>
				<S.Label labelActive={selectedOption ? true : false}>
					{label}
				</S.Label>
				<S.Value>
					{selectedOption?.name}
				</S.Value>
				<S.ImageContainer>
					<Image
						src={require('../../../../public/porto-images/Porto-ic-short-arrow-down.svg')}
						width={16}
						height={16}
						alt="img"
					/>
				</S.ImageContainer>
			</S.Select>
			{
				dropdownActive ?
					<S.DropdDownList>
						<div className="dropdown">
							{selectOptions.map((option) => (
								<div key={option.value} className="option"
									onClick={() => selectOption(option)}>{option.name}</div>
							))}
						</div>
					</S.DropdDownList> : null
			}
		</S.Container>
	);
};
