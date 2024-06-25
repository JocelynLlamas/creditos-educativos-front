import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CreditRequestListComponent } from './credit-request-list.component';
import { CreditRequestService } from 'src/app/services/credit-request/credit-request.service';
import { UserService } from 'src/app/services/users/user.service';
import { of } from 'rxjs';

describe('CreditRequestListComponent', () => {
  let component: CreditRequestListComponent;
  let fixture: ComponentFixture<CreditRequestListComponent>;
  let creditRequestService: jasmine.SpyObj<CreditRequestService>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const creditRequestServiceSpy = jasmine.createSpyObj('CreditRequestService', ['getAllRequests', 'deleteRequest', 'updateStatus']);
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);

    await TestBed.configureTestingModule({
      declarations: [ CreditRequestListComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: CreditRequestService, useValue: creditRequestServiceSpy },
        { provide: UserService, useValue: userServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditRequestListComponent);
    component = fixture.componentInstance;
    creditRequestService = TestBed.inject(CreditRequestService) as jasmine.SpyObj<CreditRequestService>;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;

    creditRequestService.getAllRequests.and.returnValue(of([]));
    userService.getUsers.and.returnValue(of([]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display username for userId', () => {
    const mockUsers = [{ id: 1, username: 'User1', password: '12345' }];
    component.users = mockUsers;

    const username = component.getUserName(1);

    expect(username).toBe('User1');
  });
});
