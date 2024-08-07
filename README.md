<h1>Teste Desenvolvedor Web Trainee</h1>

CREATE TABLE transacoes (
    mes_ano VARCHAR(7),
    nome VARCHAR(50),
    produto VARCHAR(50),
    valor DECIMAL(10, 2),
    cor VARCHAR(20)
);
INSERT INTO transacoes (mes_ano, nome, produto, valor, cor)
VALUES 
('08-22', 'Paulo', 'Carro', 120, 'Verde'),
('12-22', 'Jose', 'Bola', 58, 'Amarelo'),
('10-21', 'João', 'Raquete', 180, 'Prata'),
('05-19', 'Paulo', 'Carro', 72, 'Verde'),
('06-22', 'Roberto', 'Bola', 150, 'Amarelo'),
('07-22', 'Maria', 'Disco', 45, 'Cinza'),
('08-22', 'Pedro', 'Bola', 30, 'Amarelo'),
('08-22', 'Ana', 'Carro', 10, 'Azul');

SELECT * FROM transacoes
WHERE mes_ano = '08-22';

SELECT produto, SUM(valor) AS total_valor
FROM transacoes
GROUP BY produto;

SELECT nome, valor
FROM transacoes
WHERE valor > 50;

SELECT cor, AVG(valor) AS media_valor
FROM transacoes
GROUP BY cor;

UPDATE transacoes
SET valor = 35
WHERE nome = 'Pedro' AND produto = 'Bola';

DELETE FROM transacoes
WHERE produto = 'Carro';

sql
Copiar código
SELECT DISTINCT nome
FROM transacoes
WHERE produto = 'Bola';

sql
Copiar código
SELECT cor, COUNT(*) AS frequencia
FROM transacoes
GROUP BY cor
ORDER BY frequencia DESC
LIMIT 1;
