import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TesteComponent } from './teste.component';

describe('TesteComponent', () => {
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;

  beforeEach(() => {
    // Configuração do módulo de teste
    TestBed.configureTestingModule({
      declarations: [TesteComponent] // Declaração do componente a ser testado
    });

    // Criação de uma instância do componente
    fixture = TestBed.createComponent(TesteComponent);
    component = fixture.componentInstance;

    // Detecção de mudanças no componente
    fixture.detectChanges();
  });

  // Teste para verificar se o componente foi criado corretamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica se o componente foi criado corretamente
  });
});
