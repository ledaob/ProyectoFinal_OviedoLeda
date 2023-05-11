import { TestBed } from '@angular/core/testing';

import { ServExperienciaLaboralService } from './serv-experiencia-laboral.service';

describe('ServExperienciaLaboralService', () => {
  let service: ServExperienciaLaboralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServExperienciaLaboralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
