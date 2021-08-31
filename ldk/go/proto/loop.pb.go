// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.15.6
// source: loop.proto

package proto

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ServiceHosts struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	HostBrokerId uint32 `protobuf:"varint,1,opt,name=hostBrokerId,proto3" json:"hostBrokerId,omitempty"`
}

func (x *ServiceHosts) Reset() {
	*x = ServiceHosts{}
	if protoimpl.UnsafeEnabled {
		mi := &file_loop_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServiceHosts) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServiceHosts) ProtoMessage() {}

func (x *ServiceHosts) ProtoReflect() protoreflect.Message {
	mi := &file_loop_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServiceHosts.ProtoReflect.Descriptor instead.
func (*ServiceHosts) Descriptor() ([]byte, []int) {
	return file_loop_proto_rawDescGZIP(), []int{0}
}

func (x *ServiceHosts) GetHostBrokerId() uint32 {
	if x != nil {
		return x.HostBrokerId
	}
	return 0
}

type LoopStartRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Session      *Session      `protobuf:"bytes,1,opt,name=session,proto3" json:"session,omitempty"`
	ServiceHosts *ServiceHosts `protobuf:"bytes,2,opt,name=serviceHosts,proto3" json:"serviceHosts,omitempty"`
}

func (x *LoopStartRequest) Reset() {
	*x = LoopStartRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_loop_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LoopStartRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LoopStartRequest) ProtoMessage() {}

func (x *LoopStartRequest) ProtoReflect() protoreflect.Message {
	mi := &file_loop_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LoopStartRequest.ProtoReflect.Descriptor instead.
func (*LoopStartRequest) Descriptor() ([]byte, []int) {
	return file_loop_proto_rawDescGZIP(), []int{1}
}

func (x *LoopStartRequest) GetSession() *Session {
	if x != nil {
		return x.Session
	}
	return nil
}

func (x *LoopStartRequest) GetServiceHosts() *ServiceHosts {
	if x != nil {
		return x.ServiceHosts
	}
	return nil
}

var File_loop_proto protoreflect.FileDescriptor

var file_loop_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x6c, 0x6f, 0x6f, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x0d, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x32, 0x0a, 0x0c, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x48, 0x6f, 0x73, 0x74, 0x73, 0x12,
	0x22, 0x0a, 0x0c, 0x68, 0x6f, 0x73, 0x74, 0x42, 0x72, 0x6f, 0x6b, 0x65, 0x72, 0x49, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0c, 0x68, 0x6f, 0x73, 0x74, 0x42, 0x72, 0x6f, 0x6b, 0x65,
	0x72, 0x49, 0x64, 0x22, 0x75, 0x0a, 0x10, 0x4c, 0x6f, 0x6f, 0x70, 0x53, 0x74, 0x61, 0x72, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x07, 0x73, 0x65, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x07, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f,
	0x6e, 0x12, 0x37, 0x0a, 0x0c, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x48, 0x6f, 0x73, 0x74,
	0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x48, 0x6f, 0x73, 0x74, 0x73, 0x52, 0x0c, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x48, 0x6f, 0x73, 0x74, 0x73, 0x32, 0x80, 0x01, 0x0a, 0x04, 0x4c,
	0x6f, 0x6f, 0x70, 0x12, 0x3c, 0x0a, 0x09, 0x4c, 0x6f, 0x6f, 0x70, 0x53, 0x74, 0x61, 0x72, 0x74,
	0x12, 0x17, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x4c, 0x6f, 0x6f, 0x70, 0x53, 0x74, 0x61,
	0x72, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74,
	0x79, 0x12, 0x3a, 0x0a, 0x08, 0x4c, 0x6f, 0x6f, 0x70, 0x53, 0x74, 0x6f, 0x70, 0x12, 0x16, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x42, 0x0a, 0x5a,
	0x08, 0x2e, 0x2f, 0x3b, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_loop_proto_rawDescOnce sync.Once
	file_loop_proto_rawDescData = file_loop_proto_rawDesc
)

func file_loop_proto_rawDescGZIP() []byte {
	file_loop_proto_rawDescOnce.Do(func() {
		file_loop_proto_rawDescData = protoimpl.X.CompressGZIP(file_loop_proto_rawDescData)
	})
	return file_loop_proto_rawDescData
}

var file_loop_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_loop_proto_goTypes = []interface{}{
	(*ServiceHosts)(nil),     // 0: proto.serviceHosts
	(*LoopStartRequest)(nil), // 1: proto.LoopStartRequest
	(*Session)(nil),          // 2: proto.Session
	(*emptypb.Empty)(nil),    // 3: google.protobuf.Empty
}
var file_loop_proto_depIdxs = []int32{
	2, // 0: proto.LoopStartRequest.session:type_name -> proto.Session
	0, // 1: proto.LoopStartRequest.serviceHosts:type_name -> proto.serviceHosts
	1, // 2: proto.Loop.LoopStart:input_type -> proto.LoopStartRequest
	3, // 3: proto.Loop.LoopStop:input_type -> google.protobuf.Empty
	3, // 4: proto.Loop.LoopStart:output_type -> google.protobuf.Empty
	3, // 5: proto.Loop.LoopStop:output_type -> google.protobuf.Empty
	4, // [4:6] is the sub-list for method output_type
	2, // [2:4] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_loop_proto_init() }
func file_loop_proto_init() {
	if File_loop_proto != nil {
		return
	}
	file_session_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_loop_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServiceHosts); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_loop_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LoopStartRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_loop_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_loop_proto_goTypes,
		DependencyIndexes: file_loop_proto_depIdxs,
		MessageInfos:      file_loop_proto_msgTypes,
	}.Build()
	File_loop_proto = out.File
	file_loop_proto_rawDesc = nil
	file_loop_proto_goTypes = nil
	file_loop_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// LoopClient is the client API for Loop service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type LoopClient interface {
	// start the loop
	LoopStart(ctx context.Context, in *LoopStartRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	// stop the loop
	LoopStop(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type loopClient struct {
	cc grpc.ClientConnInterface
}

func NewLoopClient(cc grpc.ClientConnInterface) LoopClient {
	return &loopClient{cc}
}

func (c *loopClient) LoopStart(ctx context.Context, in *LoopStartRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/proto.Loop/LoopStart", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *loopClient) LoopStop(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/proto.Loop/LoopStop", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// LoopServer is the server API for Loop service.
type LoopServer interface {
	// start the loop
	LoopStart(context.Context, *LoopStartRequest) (*emptypb.Empty, error)
	// stop the loop
	LoopStop(context.Context, *emptypb.Empty) (*emptypb.Empty, error)
}

// UnimplementedLoopServer can be embedded to have forward compatible implementations.
type UnimplementedLoopServer struct {
}

func (*UnimplementedLoopServer) LoopStart(context.Context, *LoopStartRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LoopStart not implemented")
}
func (*UnimplementedLoopServer) LoopStop(context.Context, *emptypb.Empty) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LoopStop not implemented")
}

func RegisterLoopServer(s *grpc.Server, srv LoopServer) {
	s.RegisterService(&_Loop_serviceDesc, srv)
}

func _Loop_LoopStart_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LoopStartRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LoopServer).LoopStart(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.Loop/LoopStart",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LoopServer).LoopStart(ctx, req.(*LoopStartRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Loop_LoopStop_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LoopServer).LoopStop(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.Loop/LoopStop",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LoopServer).LoopStop(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

var _Loop_serviceDesc = grpc.ServiceDesc{
	ServiceName: "proto.Loop",
	HandlerType: (*LoopServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "LoopStart",
			Handler:    _Loop_LoopStart_Handler,
		},
		{
			MethodName: "LoopStop",
			Handler:    _Loop_LoopStop_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "loop.proto",
}
