export function validarCNPJ(cnpj: string) {
    cnpj = cnpj.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Verifica se a string tem 14 dígitos
    if (cnpj.length !== 14) {
        return false;
    }

    // Validação do primeiro dígito verificador
    let soma = 0;

    for (let i = 0; i < 12; i++) {
        soma += parseInt(cnpj.charAt(i)) * (13 - i);
    }

    let resto = soma % 11;
    let dv1 = resto < 2 ? 0 : 11 - resto;

    if (dv1 !== parseInt(cnpj.charAt(12))) {
        return false;
    }

    // Validação do segundo dígito verificador
    soma = 0;

    for (let i = 0; i < 13; i++) {
        soma += parseInt(cnpj.charAt(i)) * (14 - i);
    }

    resto = soma % 11;
    let dv2 = resto < 2 ? 0 : 11 - resto;

    if (dv2 !== parseInt(cnpj.charAt(13))) {
        return false;
    }

    return true;
}

export function validarCPF(cpf: string) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Verifica se a string tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais (ex: 000.000.000-00)
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Validação dos dígitos verificadores
    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

export function formatarCpfCnpj(valor: string) {
    valor = valor.replace(/\D/g, '');

    // Aplica a máscara de CPF se tiver até 11 dígitos
    if (valor.length <= 11) {
        if (valor.length <= 3) {
            return valor;
        } else if (valor.length <= 6) {
            return valor.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        } else if (valor.length <= 9) {
            return valor.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        } else {
            return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        }
    }
    // Aplica a máscara de CNPJ se tiver mais de 11 dígitos
    else {
        if (valor.length <= 12) {
            return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{1,4})/, '$1.$2.$3/$4');
        } else if (valor.length <= 14) {
            return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})/, '$1.$2.$3/$4-$5');
        } else {
            return valor.substring(0, 14).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})/, '$1.$2.$3/$4-$5');
        }
    }
}

export function validarEmail(email: string) {
    // Expressão regular para validar o formato do e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

export function validarTelefone(telefone: string) {
    // Remove todos os caracteres não numéricos
    const telefoneNumerico = telefone.replace(/\D/g, '');

    // Verifica se o telefone tem 10 ou 11 dígitos
    return telefoneNumerico.length === 10 || telefoneNumerico.length === 11;
}

export function formatarTelefone(telefone: string) {
    // Remove todos os caracteres não numéricos
    telefone = telefone.replace(/\D/g, '');

    // Limita o número máximo de dígitos a 11
    telefone = telefone.substring(0, 11);

    // Se o telefone estiver vazio, retorna uma string vazia
    if (telefone.length === 0) {
        return '';
    }

    // Verifica se há um código de área
    if (telefone.length <= 2) {
        // Adiciona apenas o código de área: (00
        return '(' + telefone;
    }

    // Verifica se há 6 dígitos após o código de área para adicionar o hífen
    if (telefone.length <= 6) {
        // Adiciona o código de área e os próximos dígitos: (00) 1234
        return '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2);
    }

    // Verifica se há 10 dígitos para adicionar o hífen
    if (telefone.length <= 10) {
        // Adiciona o código de área, os próximos dígitos e o hífen: (00) 1234-5678
        return '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 6) + '-' + telefone.substring(6);
    }

    // Caso contrário, formata como número de celular com DDD
    // Adiciona o código de área, os próximos dígitos e o hífen: (00) 12345-6789
    return '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 7) + '-' + telefone.substring(7);

}

export function formatarCEP(cep: string) {
    // Remove todos os caracteres não numéricos
    cep = cep.replace(/\D/g, '');

    // Limita o número máximo de dígitos a 8
    cep = cep.substring(0, 8);

    // Se o CEP estiver vazio, retorna uma string vazia
    if (cep.length === 0) {
        return '';
    }

    // Adiciona a máscara: 00000-000
    return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
}


