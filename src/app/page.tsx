"use client";

import { useState } from 'react';
import styles from '../app/styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  const [question, setQuestion] = useState<string>('');
  const [responses, setResponses] = useState<{ responses: { model: string, response: string }[], bestResponse: string } | { error: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || 'https://desafio-llms.onrender.com';
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponses(null);
    
    try {
      const res = await fetch(`${API_URL}/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setResponses(data);
    } catch (error) {
      console.error('Erro ao buscar resposta:', error);
      setResponses({ error: 'Erro ao buscar resposta' });
    }
    
    setLoading(false);
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Consultor IA</h1>
        <Image src="/ia.png" alt="Ícone IA" width={54} height={50} unoptimized />
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          type="text" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Digite sua pergunta..." 
          className={styles.input}
        />
        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? 'Carregando...' : 'Consultar'}
        </button>
      </form>
      
      {responses && (
        <div className={styles.responses}>
          <h2>Respostas:</h2>
          {'error' in responses ? (
            <p className={styles.error}>{responses.error}</p>
          ) : (
            <ul>
              {responses.responses.map((res, index) => (
                <li key={index} className={styles.responseItem}>
                  <strong>{res.model.charAt(0).toUpperCase() + res.model.slice(1)}:</strong> {res.response}
                </li>
              ))}
              <h3 className={styles.responseFinal}>Melhor Resposta:</h3>
              <p>{responses.bestResponse}</p>
            </ul>
          )}
        </div>
      )}
      
      <footer className={styles.footer}>
        <p>Developed by: Filipi Dantas</p>
      </footer>
    </div>
  );
}
