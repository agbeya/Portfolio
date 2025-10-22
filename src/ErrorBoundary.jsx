import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError:false, err:null }; }
  static getDerivedStateFromError(err){ return { hasError:true, err }; }
  componentDidCatch(err, info){ console.error("ErrorBoundary", err, info); }
  render(){
    if(this.state.hasError){
      return (
        <div style={{ padding: 16, color: '#f55' }} role="alert">
          <h2>Une erreur est survenue</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: 'inherit' }}>
            {this.state.err ? String(this.state.err) : 'Erreur inconnue'}
            {this.state.err && this.state.err.stack ? `\n\n${this.state.err.stack}` : ''}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
