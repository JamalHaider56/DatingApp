using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class UsersController : BaseApiController
    {
        // private readonly DataContext _context;
        // public UsersController(DataContext context)
        // {
        //     _context = context;
        // }

        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        // [AllowAnonymous]
        // [HttpGet]
        // public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
        //   var users= _context.Users.ToListAsync();
        //     return await users;
        // }
        [HttpGet]
        // public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        // {
        //     var users = await _userRepository.GetUserAsync();
        //     var userToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);
        //     return Ok(userToReturn);

        // }

 public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
         var users=   await _userRepository.GetMembersAsync();
            return Ok(users);

        }


        // [Authorize]
        [HttpGet("{username}")]

        //     public async Task<ActionResult<AppUser>>  GetUser(int id){
        // return await _context.Users.FindAsync(id);   
        //     }

        // public async Task<ActionResult<MemberDto>> GetUser(string username)
        // {
        //     var users = await _userRepository.GetUserByUsernameAsync(username);
        //     return _mapper.Map<MemberDto>(users);

        // }
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            return await _userRepository.GetMemberAsync(username);

        }
    }
}