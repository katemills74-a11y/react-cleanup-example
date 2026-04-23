const styles = {
  container: {
    border: '1px solid #ccc',
    padding: 10,
    marginTop: '20px',
    display: 'block',
  },
  title: (big) => ({
    fontSize: big ? '32px' : '18px',
  }),
  countText: {
    marginBottom: 5,
  },
  button: (count) => ({
    background: count % 2 === 0 ? 'green' : 'red',
    color: '#fff',
    padding: 10,
    cursor: 'pointer',
  }),
  inputWrapper: {
    marginTop: 15,
  },
  input: {
    padding: 5,
    marginLeft: 10,
  },
  message: {
    color: 'blue',
  },
  footer: {
    marginTop: 20,
    borderTop: '1px dashed #aaa',
  },
  footerText: {
    fontSize: 12,
  },
}

export default styles
