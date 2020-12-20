imagens = new Array();
imagens[0] = "img/CAMPREV - Instituto de Previdência Social do Município de Campinas.jpg";
imagens[1] = "img/cofit.JPG";
imagens[2] = "img/departamento-de-limpeza-urbana-38735-iEW6.jpg";
imagens[3] = "img/DER Departamento De Estradas E Rodagem Campinas.JPG";
imagens[4] = "img/Fumec Dpj Departamento de Parques e Jardins.JPG";
imagens[5] = "img/logo-sistema.png";
imagens[6] = "img/Prefeitura Municipal de Campinas - Administração Regional 8 (AR8).JPG";
imagens[7] = "img/prefeitura-de-campinas.jpg";
imagens[8] = "img/SEMURB-Secretaria-Municipal-e-Urbanismo-Campinas.jpg";

texto = new Array();
texto[0] = "O Instituto de Previdência do Município de Campinas – Camprev, começou suas atividades no ano de 2004. Trata-se de uma Autarquia com personalidade jurídica própria, sem fins lucrativos, dotado de autonomia administrativo-financeira. Foi constituída com base na Lei Complementar nº 10, que estabeleceu as regras para o seu funcionamento. O Camprev é o responsável pela administração do Regime Próprio de Previdência Social do município, gerindo os recursos e os fundos previdenciários, concedendo, mantendo e pagando os benefícios previdenciários aos servidores inativos e pensionistas   dos Poderes Executivo e Legislativo Municipais. Atualmente o Camprev opera os seguintes benefícios: Aposentadoria, Pensão, Auxílio Doença, Auxílio Maternidade e Auxílio Reclusão. O Instituto se rege pela legislação específica do setor, pelo seu Estatuto e por atos que fundamentam boas práticas de gestão, bem como a Ética Profissional e o Código de Conduta, primando pela transparência, ética democrática, profissionalismo, confiança, responsabilidade, solidariedade, equidade e justiça O Camprev tem por missão assegurar o pagamento de seus beneficiários e pensionistas, contribuindo para a qualidade de vida e o desenvolvimento de seus participantes.";

texto[1] = "COFIT, é a responsável pela fiscalização e notificação da limpeza de terrenos abandonados e execução de calçadas. Segundo dados da prefeitura, a cidade possui mais de 90 mil terrenos cadastrados e sua fiscalização é realizada através de petições dos moradores, pelo telefone 156.";

texto[2] = "A Secretaria Municipal de Serviços Públicos (SMSP) foi criada pelo Decreto nº 16.532, de 29 de dezembro de 2008. O órgão tem a tarefa de planejar, gerenciar, coordenar e implementar, por meio das Diretorias de Departamentos, a manutenção geral do Município de Campinas. O objetivo é efetuar a manutenção da cidade através da manutenção do viário pavimentado e não-pavimentado, do sistema hidro-plúvio-escoador, a manutenção e a expansão das áreas de verde paisagístico, bosques, jardins e praças, realizando as coletas convencionais e seletivas de lixo, varrição do viário pavimentado, gerenciamento dos aterros sanitários e implementando as usinas de reciclagem e reprocessamento de lixo, além de gerenciar a usina de reprocessamento de entulho e resíduos da construção civil.";

texto[3] =  "DER Departamento De Estradas E Rodagem Campinas<br>Endereço: R. Cmte. Ataliba Euclides Vieira, s/n - Jardim Santana, Campinas - SP, 13088-648<br> Este serviço permite a pesquisa de Defesa da Autuação, Recurso Administrativo e de multas relativas às infrações cometidas nas rodovias no âmbito da circunscrição do Departamento de Estradas de Rodagem";

texto[4] = "O Departamento de Parques e Jardins tem por objetivo gerenciar os parques, jardins e bosques da cidade, promovendo a conservação, a partir de ações que visam à manutenção dessas áreas, com foco na preservação das espécies, tanto da fauna e flora, como na manutenção das características ambientais. O Departamento de Parques e Jardins - DPJ - é dividido em coordenadorias setoriais, que planejam o trabalho dividido por áreas. o que resulta em melhores serviços para a população de Campinas.";

texto[5] = "A SETEC atua em diversas áreas com toda a qualidade que você já conhece. Concessão de licenças e fiscalização de bancas de revistas, de frutas e de flores. Cadastramento de comerciantes autônomos, inclusive feirantes, trabalhadores da economia informal e trailers. Organização de feiras livres. Instalação de placas de ruas. Administração do mercado municipal. Administração dos cemitérios municipais e seus velórios: Cemitério da Saudade, Cemitério de Sousas e Cemitério Parque Nossa Senhora da Conceição. Administração e fiscalização do comércio em solo público, por exemplo, carrinho de cachorro-quente, pipocas e doces; trailers para venda de lanches; quiosque para venda de pastéis, hortifrutigranjeiros e flores; instalação de caçambas coletoras de entulho; construção de guaritas e etc. Autorizar e fiscalizar a fixação de publicidade em solo público.Autorizar e fiscalizar o exercício de qualquer atividade em instalação removível, desde que não prejudique o livre trânsito de veículos ou de pedestres, não afete os interesses do comércio estabelecido, não colida com disposições especiais e com as condições de estética.";


texto[6] = "Prefeitura Municipal de Campinas - Administração Regional 8 (AR8)<br> Endereço: R. Venezuela, 939 - Jardim do Trevo, Campinas - SP, 13036-350<br>Telefone: (19) 3278-0808<br>";

texto[7] = "Prefeitura de Campinas<br>sede do poder executivo do município.<br> Esta é comandada por um prefeito e dividida em secretarias de governo, como educação, saúde ou meio ambiente";

texto[8] = "Secretaria Municipal de Urbanismo<br>Responsável pela fiscalização de obras e de atividades comerciais em solo privado, emissão de alvará de uso e eventos, certidão de uso do solo, realização de estudos específicos para grandes empreendimentos e emissão de diretrizes urbanísticas.";

var IMG1 = Math.floor(Math.random() * imagens.length);

var IMG2 = Math.floor(Math.random() * imagens.length);

while(IMG2 == IMG1){
    var IMG2 = Math.floor(Math.random() * imagens.length); 
}

var IMG3 = Math.floor(Math.random() * imagens.length);

while(IMG3 == IMG1 || IMG3 == IMG2){
    IMG3 = Math.floor(Math.random() * imagens.length);
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("image-1").src = imagens[IMG1];
    document.getElementById("image-2").src = imagens[IMG2];
    document.getElementById("image-3").src = imagens[IMG3];

    document.getElementById("texto=1").innerHTML = texto[IMG1];
    document.getElementById("texto=2").innerHTML = texto[IMG2];
    document.getElementById("texto=3").innerHTML = texto[IMG3];
 });
