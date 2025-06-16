.detail-card form {
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  padding: 1.2rem 1rem 1rem 1rem;
  box-shadow: 0 2px 8px rgba(120, 120, 120, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.detail-card input,
.detail-card textarea {
  font-size: 1.05rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  background: #f8fafc;
  transition: border 0.2s;
  font-family: inherit;
  margin-bottom: 0.5rem;
}

.detail-card input:focus,
.detail-card textarea:focus {
  border: 1.5px solid #007aff;
  outline: none;
}

.detail-card button[type="submit"] {
  background: #007aff;
  color: #fff;
  border-radius: 10px;
  border: none;
  padding: 0.65rem 1.2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.18s;
  margin-right: 0.5rem;
}

.detail-card button[type="submit"]:hover {
  background: #0052cc;
}

.detail-card button[type="button"] {
  background: #e3e7ed;
  color: #333;
  border-radius: 10px;
  border: none;
  padding: 0.65rem 1.2rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.18s;
}

.detail-card button[type="button"]:hover {
  background: #cad1dc;
}

.detail-card form button + button {
  margin-left: 0.6rem;
}